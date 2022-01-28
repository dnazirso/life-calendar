import { Component, createContext, ReactNode } from "react";

export interface User {
  name: string;
  birthdate: Date;
}

interface ISignInContextValues {
  status: "idle" | "pending" | "success" | "failed";
  user: User;
}

interface ISignInContext extends ISignInContextValues {
  setUser: (username: User) => void;
  getContextFromLocalStorage: () => void;
}

interface Props {
  children: ReactNode;
}

const initialValue: ISignInContextValues = {
  status: "idle",
  user: {
    name: "",
    birthdate: new Date(),
  },
};

const initialContext: ISignInContext = {
  ...initialValue,
  setUser: (username: User) => {},
  getContextFromLocalStorage: () => {},
};

function SignInActions(app: Component<Props, ISignInContext>): ISignInContext {
  function setUser(user: User) {
    app.setState({ user });
    persistContext(app.state);
  }

  function persistContext(partialContext: Partial<ISignInContext>) {
    const stringyfiedContext = JSON.stringify(partialContext);
    localStorage.setItem("context", stringyfiedContext);
  }

  function getContextFromLocalStorage() {
    const partialContextString = localStorage.getItem("context");
    if (partialContextString && partialContextString.length > 0) {
      const partialContext = JSON.parse(partialContextString);
      app.setState({ ...partialContext });
    }
  }

  return {
    ...initialValue,
    setUser,
    getContextFromLocalStorage,
  };
}

const SignInContext = createContext<ISignInContext>(initialContext);

export class SignInContextProvider extends Component<Props, ISignInContext> {
  state: ISignInContext = SignInActions(this);
  componentDidMount() {
    this.state.getContextFromLocalStorage();
  }
  render() {
    return (
      <SignInContext.Provider value={this.state}>
        {this.props.children}
      </SignInContext.Provider>
    );
  }
}

export default SignInContext;