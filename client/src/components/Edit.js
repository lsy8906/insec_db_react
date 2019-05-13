import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Edit extends Component {
    render() {
        return (
            <>
                <h2>현재 DB에 추가된 솔루션 : </h2>
                <form action="/training-dates?_method=put" method="post">
                    <h2 style={{margin: "20px 0 10px"}}>솔루션네임</h2>
                    <table className="schedule">
                        <colgroup>
                            <col style={{width: "20%"}} />
                            <col style={{width: "44%"}} />
                            <col style={{width: "12%"}} />
                            <col style={{width: "12%"}} />
                            <col style={{width: "12%"}} />
                        </colgroup>
                        <tr>
                            <th>날짜</th>
                            <th>교육명</th>
                            <th>수업 일수</th>
                            <th>시간</th>
                            <th>장소</th>
                        </tr>
                            <tr>
                                <td><input type="text" id="date" name="startDate" value="<%= trainingDate.startDate %>" style={{width: "100px;"}} /> ~ <input type="text" id="date" name="endDate" value="<%= trainingDate.endDate %>" style={{width: "100px;"}} /></td>
                                <td><input type="text" id="title" name="title" value="<%= trainingDate.title %>" /></td>
                                <td><input type="text" id="period" name="period" value="<%= trainingDate.period %>" /></td>
                                <td><input type="text" id="time" name="time" value="<%= trainingDate.time %>" /></td>
                                <td><input type="text" id="place" name="place" value="<%= trainingDate.place %>" /></td>
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