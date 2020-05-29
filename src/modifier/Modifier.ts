import { Converter } from "./converters";

export default class Modifier {
  mainConvert!: Converter;
  microConverters: Converter[] = [];

  /**
   * 注册主应用转换器
   */
  public registerMainConverter(converter: Converter) {
    this.mainConvert = converter;
  }

  /**
   * 注册微应用转换器
   */
  public registerMicroConverter(converter: Converter) {
    this.microConverters.push(converter);
  }

  /**
   * 转换 App
   */
  public convertApps() {
    this.mainConvert.buildMainApp();
    
    const microConverters = this.microConverters;
    for (let i = 0; i < microConverters.length; i++) {
      const converter: Converter = microConverters[i];
      converter.buildMicroApp();
    }
  }
}
