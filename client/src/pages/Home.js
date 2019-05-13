import React from 'react';

const Home = () => (
    <div className="inner">
        <div className="center">
            <form action="/login" method="post" style={{display: "inline-block",padding: "20px 40px",border: "1px solid #eee",textAlign: "left"}}>
                <h2>로그인</h2>
                <br />
                <fieldset>
                    <div className="">
                        <label for="username">아이디</label>
                        <div>
                            <input type="text" id="username" name="username" value="" />
                        </div>
                    </div>
                    <div className="">
                        <label for="password">비밀번호</label>
                        <div>
                            <input type="password" id="password" name="password" value="" />
                        </div>
                    </div>
                </fieldset>
                <br />
                <div className="button">
                    <input type="submit" value="로그인하기" />
                </div>
            </form>
        </div>
    </div>
)

export default Home;