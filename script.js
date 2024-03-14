document.querySelectorAll(".student img").forEach(student => {
    student.addEventListener("click", function() {
        const name = this.dataset.name;
        const roll = this.dataset.roll;
        const gender = this.dataset.gender;
        const grade = this.dataset.grade;
        
        const studentInfoHTML = `
        <div class="student-info-container">
        <h2>Student Profile</h2>
        <table>
            <tr>
                <th>Attribute</th>
                <th>Details</th>
            </tr>
            <tr>
                <td><strong>Name</strong></td>
                <td>${name}</td>
            </tr>
            <tr>
                <td><strong>Roll No</strong></td>
                <td>${roll}</td>
            </tr>
            <tr>
                <td><strong>Gender</strong></td>
                <td>${gender}</td>
            </tr>
            <tr>
                <td><strong>Grade</strong></td>
                <td>${grade}</td>
            </tr>
            <tr>
                <td><strong>Address</strong></td>
                <td>Hinjewadi, Pune</td>
            </tr>
            <tr>
                <td><strong>Email</strong></td>
                <td>${name}@example.com</td>
            </tr>
        </table>
    </div>
    
        `;

        document.getElementById("studentInfo").innerHTML = studentInfoHTML;
    });
});

function toggleMenu() {
    const timetableInfo = document.getElementById("timetableInfo");
    if (timetableInfo.innerHTML.trim() === '') {
        const timetableHTML = `
            <section id="timetable-section" class="timetable">
                <h2>Timetable</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>Mathematics</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>Science</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>English</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>History</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>9:00 AM - 10:00 AM</td>
                            <td>Physical Education</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;
        timetableInfo.innerHTML = timetableHTML;
    } else {
        timetableInfo.innerHTML = '';
    }
}
