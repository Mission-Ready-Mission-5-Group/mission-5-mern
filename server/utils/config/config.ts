import dotenv from 'dotenv';

// Load env variable
dotenv.config();

// Export Config
export const CONFIG = {
	PORT: loadEnvironmentVariable(process.env.PORT,"process.env.PORT"),
	MONGO_HOST: loadEnvironmentVariable(process.env.MONGO_HOST,"MONGO_HOST"),
	NODE_ENV: loadEnvironmentVariable(process.env.NODE_ENV,"NODE_ENV")
}


// HELPER FUNCTION
function loadEnvironmentVariable<T>(environmentVariable: T,string?:string) {
	if (!environmentVariable)
		throw new Error("Error: environment variable "+string+" is NOT defined")
	return environmentVariable
}