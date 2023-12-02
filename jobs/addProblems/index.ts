import * as fs from 'fs';
import * as path from 'path';
import { match } from 'ts-pattern';

import json from './problems.json';
import {
  LEETCODE_README_TEMPLATE,
  ROOT_README_PROBLEM_TEMPLATE,
  ROOT_README_TEMPLATE,
} from './template';

type Year = string;
type Month = string;
type Day = string;
type DateRange = `${Month}/${Day} ~ ${Month}/${Day}`;
type DateString = `${Year}-${Month}-${Day}`;

interface Data {
  [key: Year]: {
    [key: DateRange]: Array<Omit<Problem, 'startDate' | 'endDate'>>;
  };
}

interface Problem {
  platform: 'leetcode';
  id: number | string;
  title: string;
  url: string;
  startDate: DateString;
  endDate: DateString;
}

const PATH = {
  ROOT: path.resolve(import.meta.dir, '../../'),
} as const;

/** MM/DD ~ MM/DD를 YYYY-MM-DD 형식의 startDate와 endDate로 바꿈 */
function parseDateRange(year: Year, dateRange: DateRange) {
  const [startMMDD, endMMDD] = dateRange.replace(/\s+/g, '').split('~'); // 공백 제거

  const [startMM, startDD] = startMMDD.split('/');
  const [endMM, endDD] = endMMDD.split('/');

  const startDate: DateString = `${year}-${startMM}-${startDD}`;
  const endDate: DateString = `${year}-${endMM}-${endDD}`;

  return {
    startDate,
    endDate,
  };
}

/** url의 마지막 문자열로 title을 만들어냄 */
function getTitleFromUrl(url: string): string {
	const matches = url.match(/\/([^\/]+)\/?$/);

	if (matches && matches[1]) {
		return matches[1]
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	} else {
		return "Untitled";
	}
}

/** 여러 depth로 year, dateRange를 key로 쓰는 json을 평탄화 */
function flattenData(data: Data): Array<Problem> {
  const res = [] as Array<Problem>;

  for (const year in data) {
    for (const dateRange in data[year]) {
      const problems = data[year][dateRange as DateRange];
      const { startDate, endDate } = parseDateRange(
        year,
        dateRange as DateRange
      );

      for (const problem of problems) {
        res.push({ ...problem, startDate, endDate, title: problem.title || getTitleFromUrl(problem.url) });
      }
    }
  }
  return res;
}

/** 문제 폴더 생성하고 README.md 만들어놓기 */
function createDirectory(problems: Array<Problem>) {
  try {
    for (const problem of problems) {
      match(problem.platform)
        .with('leetcode', () => {
          const leetcodePath = `${PATH.ROOT}/LeetCode`;
          const directoryName = problem.id.toString().padStart(5, '0');
          const directoryPath = `${leetcodePath}/${directoryName}`;

          if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath);
            console.log(`SYSTEM:: ${directoryPath}/README.md 생성 완료`);
          }

          fs.writeFileSync(
            `${directoryPath}/README.md`,
            LEETCODE_README_TEMPLATE(problem)
          );
          console.log(`SYSTEM:: ${directoryPath}/README.md 수정 완료`);
        })
        .otherwise(() => null);
    }
  } catch (error) {
    console.error('ERROR:: 문제 폴더 생성 실패', error);
  }
}

/** Root README.md 덮어쓰기 */
function createRootREADME(data: Data) {
  try {
    console.log('SYSTEM:: ROOT README.md를 수정합니다...');
    let res = ROOT_README_TEMPLATE;
    for (const year in data) {
      for (const dateRange in data[year]) {
        const problems = data[year][dateRange as DateRange];
        const rowTemplate = ROOT_README_PROBLEM_TEMPLATE({
          dateRange,
          problems,
        });
        res = `${res}\n\n${rowTemplate}`;
      }
    }

    res = `${res}\n`;
    fs.writeFileSync(`${PATH.ROOT}/README.md`, res);
    console.log(`SYSTEM:: ROOT README.md 수정 완료`);
  } catch (error) {
    console.error('ERROR:: ROOT README.md 수정 실패', error);
  }
}

const problems = flattenData(json as Data);
createDirectory(problems);
createRootREADME(json as Data);
