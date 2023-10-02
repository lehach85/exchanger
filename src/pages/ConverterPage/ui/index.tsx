import {Header} from "@/widgets/Header";
import {PageTitle} from "@/widgets/PageTitle";
import {Converter} from "@/features/Converter";
import {Footer} from "@/widgets/Footer";

const ConverterPage = () => {
    return (
        <>
            <Header/>
            <main>
                <PageTitle title="Конвертор валют" />
                <Converter/>
            </main>
            <Footer />
        </>
    );
};

export default ConverterPage;