export const ROOT_README_TEMPLATE =
  '# Solve-Algorithms\n\nSolve Algorithm problems';

/**
 * ### 10/20 ~ 10/26
 *
 * [99. Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
 *
 * [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
 */
export function ROOT_README_PROBLEM_TEMPLATE({
  dateRange,
  problems,
}: {
  dateRange: string;
  problems: Array<{ id: number | string; title: string; url: string }>;
}) {
  const problemsTemplateList = problems.map(
    (problem) => `[${problem.id}. ${problem.title}](${problem.url})`
  );
  return `### ${dateRange}\n\n${problemsTemplateList.join('\n\n')}`;
}

/**
 * # Leet 99. Recover Binary Search Tree
 *
 * Due: 2023-10-26
 * https://leetcode.com/problems/recover-binary-search-tree/
 */
export function LEETCODE_README_TEMPLATE({
  id,
  title,
  url,
  endDate,
}: {
  id: number | string;
  title: string;
  url: string;
  endDate: string;
}) {
  return `# Leet ${id}. ${title}\n\nDue: ${endDate}\n${url}\n`;
}
