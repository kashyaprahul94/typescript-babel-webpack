import { Config } from "@config";

interface IHello {
	msg: string;
}

const abc: IHello = {
	msg: "Hello"
};

console.log( abc, Config.Instance());