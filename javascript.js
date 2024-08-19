document.addEventListener('DOMContentLoaded', () => {
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const monthYearSpan = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');
    let currentDate = new Date();
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        calendarBody.innerHTML = '';
        monthYearSpan.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
        let row = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            row.appendChild(document.createElement('th')).textContent = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i];
        }
        calendarBody.appendChild(row);
        for (let i = 0; i < firstDay.getDay(); i++) {
            const cell = document.createElement('td');
            cell.classList.add('empty');
            row.appendChild(cell);
        }
        for (let day = 1; day <= lastDay.getDate(); day++) {
            if (row.children.length === 7) {
                row = document.createElement('tr');
                calendarBody.appendChild(row);
            }
            const cell = document.createElement('td');
            cell.textContent = day;
            row.appendChild(cell);
        }
    }
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate); 
});
