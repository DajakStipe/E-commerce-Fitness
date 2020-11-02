import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listUsers, deleteUser } from "../actions/userActions";

const UserListScreen = ({ history }) => {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userDelete = useSelector((state) => state.userDelete);
	const { success: successDelete } = userDelete;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers());
		} else {
			history.push("/");
		}
	}, [dispatch, history, successDelete]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure you want to delete that user?")) {
			dispatch(deleteUser(id));
		}
	};

	return (
		<>
			<h1>Users</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Table striped bordered hover responsive className='table-sm'>
					<thead>
						<tr style={{ textAlign: "center" }}>
							<th>ID</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADMIN</th>
						</tr>
					</thead>
					<tbody style={{ textAlign: "center" }}>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<td>{user.name}</td>
								<td>
									<a href={`mailto:${user.email}`}></a>{" "}
									{user.email}
								</td>
								<td
									style={{
										textAlign: "center",
									}}
								>
									{user.isAdmin ? (
										<i
											className='fas fa-check'
											style={{
												color: "green",
											}}
										></i>
									) : (
										<i
											className='fas fa-times'
											style={{ color: "red" }}
										></i>
									)}
								</td>
								<td style={{ textAlign: "center" }}>
									<LinkContainer
										to={`/user/${user._id}/edit`}
									>
										<Button
											variant='info'
											className='btn-sm'
										>
											<i className='fas fa-edit'></i>
										</Button>
									</LinkContainer>

									<Button
										variant='danger'
										className='btn-sm'
										onClick={() => deleteHandler(user._id)}
									>
										<i className='fas fa-trash'></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default UserListScreen;
