import { Rewriter } from "../rewriters";

export default abstract class Converter {
  public abstract setRewriter(rewriter: Rewriter): void;
  public abstract buildMainApp(): Promise<any>;
  public abstract buildMicroApp(): Promise<any>;
}
