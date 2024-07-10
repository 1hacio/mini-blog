import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
    const markdownFiles = [
        { name: "dd", content: "avgfyvfga" },
        { name: "dd", content: "abhhja" }
    ];
    return (
        <div className="flex-1 py-8 px-6">
            <div className="container mx-auto grid gird-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-3">
                    <h2 className="text-2xl font-bold mb-4">글</h2>
                    <div className="gird grid-cols-2 md:grid-cols-2 gap-6">
                        {markdownFiles.map((file, index) => (
                            <Link key={index} to={`/blog/${file.name}`}
                                className="rounded-lg overflow-hidden shadow-md">
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">{file.name}</h3>
                                    <p className="text-muted">
                                        {file.content}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}