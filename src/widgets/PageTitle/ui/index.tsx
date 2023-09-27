import './styles.css';

type TPageTitleProps = {
    title: string;
}

export const PageTitle = ({title}: TPageTitleProps) => {
    return (
        <h1 className="page-title">{title}</h1>
    );
};