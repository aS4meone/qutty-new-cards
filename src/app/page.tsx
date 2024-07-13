import React from "react";
import ServiceCard from "@/entities/ServiceCard";


export default function Home() {
    const services = [
        {
            title: "Mind-keeper",
            description: "Когнитивные тренинги, нейропсихологическое тестирование, настольные игры и другая умственная активность.",
            price: 5000
        },
        {
            title: "Health-keeper",
            description: "Контроль здоровья, ведение дневника давления и глюкозы крови, помощь в измерении, выдача лекарств, контроль приема лекарств, раскладка лекарств, профилактика пролежней.",
            price: 3000
        },
        {
            title: "Pure-helper",
            description: "Помощь в соблюдении гигиены, купание, подмывание, смена подгузника, бритье, смена белья нательного и постельного.",
            price: 4000
        },
        {
            title: "GymFit-helper",
            description: "Адаптивная физкультура для сохранения физической активности, массаж.",
            price: 5000
        },
        {
            title: "Сопровождение пациента",
            description: "Прогулки, посещение медицинских и других учреждений, мероприятий. Транспортные расходы за пациента и помощника оплачивает заказчик.",
            price: 2000
        }
    ];

    return (
        <div className="w-full min-h-screen p-8 bg-gray-100 flex flex-col items-center gap-8">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4">лаоуыфшпфоофпуыг</h1>
                <p className="text-lg text-gray-600">
                    тут типа описание и картинка деда того
                    <br/>
                    хуйня которая по шагам
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                    />
                ))}
            </div>
        </div>
    );
}
