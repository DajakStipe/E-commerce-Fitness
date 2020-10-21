import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@gmail.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "User1",
		email: "stipe@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "User2",
		email: "dajak@gmail.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
