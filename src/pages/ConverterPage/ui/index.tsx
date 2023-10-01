import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {Converter} from "@/features/Converter";

const ConverterPage = () => {
    return (
        <>
            <Header/>
            <PageTitle title="Конвертор валют" />
            <Converter/>
        </>
    );
};

export default ConverterPage;