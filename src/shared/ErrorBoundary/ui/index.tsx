import { Component, ErrorInfo, ReactNode } from "react";

type ErrorState = { isError: boolean };

interface IProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<IProps> {
    state: ErrorState = {
        isError: false,
    };

    static getDerivedStateFromError(): ErrorState {
        return { isError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(`Посмотри на ошибку. ${error}: ${errorInfo}`);
    }

    clearState = (): void => {
        this.setState({
            isError: false,
        });
    };

    render(): ReactNode {
        return this.state.isError ? (
            <div>
                <h1>Ошибка</h1>
                <p>Кажется что-то пошло не так</p>
            </div>
        ) : (
            this.props.children
        );
    }
}

export { ErrorBoundary };