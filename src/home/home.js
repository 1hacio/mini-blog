import React from "react";
import img from "../img/img.png"
import Career from "./career";

export default function Home() {

    const careerList = [
        { title: "제목1", subTitle: "스이세이", Date: "0322", comment: "stella stella" },
        { title: "제목2", subTitle: "레오니드", Date: "0811", comment: "the WALL" },
        { title: "제목3", subTitle: "릭애슬리", Date: "릭롤", comment: "Never Gonna Give You Up" }
    ]

    return (
        <div className="w-full max-w-3-xl mx-auto py-12 px4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center space-y-2">
                    <span className="flex overflow-hidden rounded-full w-24 h-24 ring-2 ring-primary">
                        <img alt="User Profile" src={img}></img>
                    </span>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">나나나</h1>
                        <p className="text-sky-500">2년제 컴공 1학년 초보 개발조무사</p>
                    </div>
                </div>
                <div className="text-center max-w-xl">
                    <p className="text-green-300">
                        일하는 노예 핫산
                    </p>
                </div>
            </div>
            <div className="mt-12 space-y-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">경력</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {careerList.map((option) => (
                            <Career title={option.title}
                                subTitle={option.subTitle}
                                date={option.Date}
                                comment={option.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}