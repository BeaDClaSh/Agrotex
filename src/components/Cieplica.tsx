import React from "react";
import styles from "../css/cieplica.module.scss";
import sidebar from "/public/sidebar.png";

const Cieplica = () => {
    const shortcuts = {
        cieplica0: "cieplica0",
        cieplica1: "cieplica1",
        cieplica2: "cieplica2",
        cieplica3: "cieplica3",
        instagram: "https://www.instagram.com/agrotex_official/",
    };

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    // Открытие/закрытие сайдбара
    const handleOpenSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    // Навигация к якорям
    const scrollToSection = (sectionId:string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles["cieplica_maingrid"]}>
            {/* Кнопка открытия сайдбара */}
            <div className={styles["gridofinfo"]}>
                <button
                    className={styles["sidebarisopenbutton"]}
                    onClick={handleOpenSidebar}
                >
                    <img
                        alt="sidebar"
                        className={styles["sidebarImg"]}
                        src={sidebar}
                    />
                </button>

                <button className={styles["mediaframe1"]}>
                    <a href={shortcuts.instagram} target="_blank" rel="noopener noreferrer">
                        <img src="/instalogo.jpg" alt="Instagram"/>
                    </a>
                </button>
            </div>

            {/* Сайдбар */}
            <div
                className={`${styles["cieplica_sidebar"]} ${
                    isSidebarOpen ? styles["open"] : ""
                }`}
            >
                <button
                    className={styles["sidebarisopenbutton2"]}
                    onClick={handleOpenSidebar}
                >
                    <img
                        alt="sidebar"
                        className={styles["sidebarImg2"]}
                        src={sidebar}
                    />
                </button>
                <button
                    className={styles["cieplica_sidebar_item"]}
                    onClick={() => scrollToSection(shortcuts.cieplica0)}
                >
                    O projekcie
                </button>

                <button
                    className={styles["cieplica_sidebar_item"]}
                    onClick={() => scrollToSection(shortcuts.cieplica1)}
                >
Cele projektu
                </button>
                <button
                    className={styles["cieplica_sidebar_item"]}
                    onClick={() => scrollToSection(shortcuts.cieplica2)}
                >
                    Rozwój projektu
                </button>
                <button
                    className={styles["cieplica_sidebar_item"]}
                    onClick={() => scrollToSection(shortcuts.cieplica3)}
                >
                    EXPLORY
                </button>

            </div>
            <div className="sourcecieplicadiv">
                <h1 id="cieplica0">1. O PROJEKCIE

                    AGROTEX to innowacyjna inteligentna szklarnia, która stanowi przełomowy krok w kierunku nowoczesnego
                    rolnictwa. Wykorzystuje zaawansowane technologie, w tym specjalistyczne czujniki, systemy
                    monitorujące oraz komputery, które współpracują w celu optymalizacji warunków upraw. Dzięki
                    precyzyjnemu zarządzaniu mikroklimatem, nawadnianiem, oświetleniem oraz składnikami odżywczymi,
                    AGROTEX umożliwia uzyskiwanie maksymalnych plonów przy minimalnym zużyciu wody, energii oraz innych
                    zasobów naturalnych. Integracja tych nowoczesnych rozwiązań nie tylko zwiększa efektywność produkcji
                    roślinnej, ale także przyczynia się do ochrony środowiska, zminimalizowania wpływu rolnictwa na
                    zmiany klimatyczne i wspiera zrównoważony rozwój.

                    AGROTEX to przyszłość rolnictwa, gdzie technologia spotyka się z naturą, by tworzyć bardziej
                    efektywne, ekologiczne i wydajne rozwiązania
                </h1>

                {/* Содержимое */}
                <div className={styles["logocontainer"]}>
                    <img
                        className={styles["welcomelogo"]}
                        src="/agrotex.webp"
                        alt="logo"
                    />
                </div>

                <h1 id="cieplica1">"CELE PROJEKTU

                    Zwiększenie produkcji dóbr rolniczych

                    Zwiększenie produkcji dóbr rolniczych w ramach projektu AGROTEX będzie możliwe dzięki zastosowaniu
                    inteligentnych technologii, które optymalizują warunki upraw. Dzięki czujnikom, które monitorują
                    temperaturę, wilgotność, nasłonecznienie oraz składniki odżywcze w glebie, szklarnia AGROTEX może
                    dostosować warunki do potrzeb konkretnych roślin w czasie rzeczywistym. Takie precyzyjne zarządzanie
                    środowiskiem sprzyja szybszemu wzrostowi roślin, większym plonom i lepszej jakości produktów.
                    Dodatkowo, zastosowanie energii słonecznej i systemów oszczędzających wodę pozwala na zwiększenie
                    efektywności produkcji przy jednoczesnym zmniejszeniu zużycia zasobów naturalnych

                    Zmniejszenie głodu na świecie

                    AGROTEX może wspierać rolników na różnych kontynentach, poprawiając ich zdolność do produkcji
                    żywności w trudnych warunkach klimatycznych, a także zapewniając dostęp do świeżych, zdrowych
                    produktów w miejscach, gdzie tradycyjna produkcja rolnicza jest ograniczona.


                    Zmniejszenie zurzycia energii
                    -----Dzięki inteligentnym czujnikom i systemom zarządzania, szklarnia minimalizuje potrzebę
                    sztucznego oświetlenia, ogrzewania czy nawadniania, co znacząco obniża zużycie energii, a
                    jednocześnie poprawia efektywność produkcji roślinnej

                    Ułatwienie produkcji warzyw i owoców dla gospodarstw domowych
                    ----Prosty system monitorowania i zarządzania sprawi, że użytkownicy mogą łatwo kontrolować
                    temperaturę, wilgotność i oświetlenie, dzięki czemu uprawy stają się mniej czasochłonne i bardziej
                    wydajne. Takie rozwiązanie pozwala każdemu, nawet bez doświadczenia rolniczego, cieszyć się świeżymi
                    produktami przez cały rok, bez konieczności inwestowania w skomplikowaną infrastrukturę

                    Spowolnienie postępowania globalnego ocieplenia
                    ---Dzięki zastosowaniu energii słonecznej i optymalizacji warunków upraw, inteligentne szklarnie
                    redukują emisję gazów cieplarnianych, wspierając ekologiczne rolnictwo i
                    zmniejszając negatywny wpływ na środowiska"</h1>
                <div className={styles["gridofpause"]}></div>
                <h1 id="cieplica2">
                    ROZWÓJ PROJEKTU

                    W przyszłości planujemy rozszerzyć nasz projekt AGROTEX na skalę globalną, aby każdy mógł cieszyć
                    się własnymi owocami, warzywami czy roślinami ozdobnymi. Kluczowym elementem rozwoju będzie
                    specjalna aplikacja, która połączy użytkowników z inteligentnymi szklarniami. Aplikacja ta będzie
                    automatycznie dostosowywać warunki upraw do potrzeb wybranych roślin, a także sugerować, jakie inne
                    rośliny mogą być hodowane w tych samych optymalnych warunkach. Zrewolucjonizowanie naszego projektu
                    pomoże także rolnikom na całym świecie, automatyzując procesy upraw i zmniejszając nakład pracy, co
                    przyczyni się do wzrostu efektywności i wydajności ich działalności.</h1>
                <div className={styles["gridofpause"]}></div>

                <h1 id="cieplica3">
                    EXPLORY


                    Głosując na nasz projekt w konkursie E(x)plory, wspierasz innowacyjne rozwiązanie, które ma
                    potencjał, by zrewolucjonizować przyszłość rolnictwa! Chciałbyś dowiedzieć się więcej? Odwiedź nasz
                    profil na Instagramie, aby zobaczyć kulisy naszego projektu, poznać naszą misję i śledzić postępy!
                    Twój głos i wsparcie to krok w stronę zrównoważonego rozwoju i przyszłości rolnictwa</h1>

            </div>
        </div>
    );
};

export default Cieplica;
