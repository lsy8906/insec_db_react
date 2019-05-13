import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class New extends Component {
    render() {
        return (
            <>
                <form action="/training-dates" method="post">
                    <table className="schedule">
                        <colgroup>
                            <col style={{width: "20%"}} />
                            <col style={{width: "20%"}} />
                            <col style={{width: "34%"}} />
                            <col style={{width: "8%"}} />
                            <col style={{width: "9%"}} />
                            <col style={{width: "9%"}} />
                        </colgroup>
                        <tr>
                            <th>솔루션명</th>
                            <th>날짜</th>
                            <th>교육명</th>
                            <th>수업 일수</th>
                            <th>시간</th>
                            <th>장소</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" name="" id="sol_input" focus="" onBlur="" readonly="true" style={{width: "100px;"}} />
                                <select name="solutionName" id="solutionName" focus="" onBlur="" onChange="">
                                        <option value="">선택해주세요.</option>
                                        <option value="">11</option>
                                        <option onSelect="">직접입력</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" id="date" name="startDate" value="" placeholder="2019.00.00" style={{width: "100px;"}} /> ~ <input type="text" id="date" name="endDate" value="" placeholder="00.00" style={{width: "100px;"}} />
                            </td>
                            <td>
                                <input type="text" id="title" name="title" value="" />
                            </td>
                            <td>
                                [ <input type="text" id="period" name="period" value="" style={{width: "22px;"}} />일 과정 ]
                            </td>
                            <td>
                                <input type="text" id="time" name="time" value="10:00 ~ 17:00" />
                            </td>
                            <td>
                                <input type="text" id="place" name="place" value="인섹시큐리티" />
                            </td>
                        </tr>
                    </table>
                    <div className="button">
                        <button type="submit">완료</button>
                        <Link to="/training" style={{backgroundColor: "#dc3545"}}>취소</Link>
                    </div>
                </form>
            </>
        )
    }
}