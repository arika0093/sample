import express, {Request, Response} from "express"


export function launchServer(){
	const app = express();
	const port = process.env?.PORT || 80
	app.get("/", (req: Request, res: Response) => {
		res.status(200).send("Express!!");
	});
	app.listen(port);
	console.log("server launched...")
}
