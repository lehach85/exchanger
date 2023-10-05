import {PageTitle} from "@/widgets/PageTitle";
import {Converter} from "@/features/Converter";
import {PageDescription} from "@/widgets/PageDescription/ui";

const ConverterPage = () => {
    return (
        <>
            <PageTitle title="Конвертор валют" />
            <PageDescription>
                <p>Используйте форму для конвертации валют. В левой части введите количество требуемое для конвертации,
                    в правой части валюту. Пересчеи будет осуществлен автоматически. </p>
            </PageDescription>
            <Converter/>
        </>
    );
};

export default ConverterPage;