import React from "react";
import img from "../img/img.png"

export default function Home() {
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
        </div>
    );
}