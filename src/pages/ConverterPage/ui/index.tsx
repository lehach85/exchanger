import {PageTitle} from "@/widgets/PageTitle";
import {Converter} from "@/features/Converter";

const ConverterPage = () => {
    return (
        <>
            <PageTitle title="Конвертор валют" />
            <Converter/>
        </>
    );
};

export default ConverterPage;