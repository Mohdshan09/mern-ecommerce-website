export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  const response = await fetch("http://localhost:8080/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
    credentials: "include",
  });

  const data = await response.json();
  console.log("json response from server:", data);

  if (response.status === 400) {
    if (data.message === "Email already exists") {
      throw new Error("Email already exists");
    } else {
      throw new Error("Bad request");
    }
  }

  if (response.status === 500) {
    throw new Error("Server error");
  }
  return data;
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  const data = await response.json();
  console.log("json response from server:", data);

  if (response.status === 400) {
    if (data.message === "User not found") {
      throw new Error("User not found");
    } else if (data.message === "Invalid credentials") {
      throw new Error("Invalid credentials");
    }
  }

  if (response.status === 500) {
    throw new Error("Server error");
  }

  //retures the status code of the response
  return response.status;
};
