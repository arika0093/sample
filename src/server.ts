import express, {Request, Response} from "express"


export function launchServer(){
	const app = express();
	app.get("/", (req: Request, res: Response) => {
		res.status(200).send("Express!!");
	});
	app.listen(80);
	console.log("server launched...")
}
