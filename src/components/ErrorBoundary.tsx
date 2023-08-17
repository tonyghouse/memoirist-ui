import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}



// interface ErrorBoundryProps {
//   children?: any;
//   fallback?: any;
// }

// class ErrorBoundary extends React.Component<ErrorBoundryProps> {
//   state = { hasError: false };

//   static getDerivedStateFromError(error: Error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error, info: React.ErrorInfo): void {
//     console.log(error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }

//     return this.props.children;
//   }
// }

export default ErrorBoundary;
