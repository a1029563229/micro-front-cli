import shell from "shelljs";

/**
 * 检测该路径的 文件/文件夹 是否存在
 */
export const detectExist = (path: string): boolean => {
  return shell.test("-e", path);
};

let workDir = __dirname;
/**
 * 设置当前工作路径
 */
export const setWorkDir = (path: string): void => {
  workDir = path;
};

/**
 * 获取当前工作路径
 */
export const getWorkDir = (): string => {
  return workDir;
};
