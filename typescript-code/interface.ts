// IUser interface
interface IUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; // optional
  startTrial: () => string;
  getCoupon: (couponName: string, off: number) => number;
}

// IAdmin interface extending IUser
interface IAdmin extends IUser {
  githubToken: string;
  role: "Role" | "Candidate" | "User";
}

// Object that conforms to IAdmin
let Sudhu: IAdmin = {
  dbId: 123,
  email: "sudhu@gmail.com",
  userId: 12345,
  startTrial: () => {
    return "Trial Started";
  },
  getCoupon: (couponName: string, off: number): number => {
    return 102;
  },
  githubToken: "github",
  role: "Role",
};

// Changing a non-readonly property
Sudhu.email = "manas@gmail.com";

// Output the object
console.log(Sudhu);

// Function
function AdminInterface(a: IAdmin) {
  return {
    dbId: 123,
    email: "sudhu@gmail.com",
    userId: 12345,
    startTrial: () => {
      return "Trial Started";
    },
    getCoupon: (couponName: string, off: number): number => {
      return 102;
    },
    githubToken: "github",
    role: "Role",
  };
  // return a;
}

console.log(AdminInterface());