// 注意ts是默认加载node_modules下的所有配置文件的
import caculator from "caculator";

axios1("str");
axios2.get("str");

const caculator1 = caculator("minus", [1, 2]);
export const caculator2 = caculator.plus([1, 2]);

export default caculator1;
