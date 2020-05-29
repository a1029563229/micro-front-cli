import shell from "shelljs";

/**
 * 检测该路径的 文件/文件夹 是否存在
 */
export const detectExist = (path: string): boolean => {
  return shell.test("-e", path);
};
