import React from "react";
// import { useNavigate } from "react-router-dom";

export const HomeLogin = () => {
    return <div className = "h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center text-center>">
            <h3 className="text-3xl text-gray-800">로그인</h3>
            <form className="flex flex-col mt-5 px-5">
                <input placeholder ="ID" className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 mb-3 py-3 px-5 rounded-lg"/>
                <div className="text-sm text-left">
                  <a href="/idfind" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    ID 찾기
                  </a>
                </div>
                <input placeholder ="passworld " className="bg-gray-100 shadow-inner focus:outline-none border-2 focus:border-opacity-50 focus:border-green-600 py-3 px-5 rounded-lg" />
                <div className="text-sm text-left">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    비밀번호 찾기
                  </a>
                </div>
                <button
  className="py-3 px-5 bg-gray-800 text-white mt-3 text-lg rounded-lg focus:outline-none hover:opacity-90"
  onClick={() => window.location.href = '/'}
>
  로그인
</button>

            </form>
        </div>
    </div>;
};