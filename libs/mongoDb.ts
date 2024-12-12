import mongoose from "mongoose";

const connectMongoDB = async () =>{
	try {
		await mongoose.connect(`${process.env.MONGODB_URI}`);
		console.log("Success Connection")
	} catch (e) {
		console.log("Failed Connection: ", e)
	}
}

export default connectMongoDB();