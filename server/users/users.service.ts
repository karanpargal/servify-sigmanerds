import { User, UserType } from "./users.schema";

const createUser = async (user: UserType) => {
  try {
    const existingUser = await User.findOne({
      walletAddress: user.walletAddress,
    });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUser = async (walletAddress: string) => {
  try {
    const user = await User.findOne({ walletAddress });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (walletAddress: string, user: UserType) => {
  try {
    const updatedUser = await User.findOneAndUpdate({ walletAddress }, user, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (walletAddress: string) => {
  try {
    const deletedUser = await User.findOneAndDelete({ walletAddress });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

export { createUser, deleteUser, getUser, getUsers, updateUser };
