import React from 'react';
import ComponentGrid from './ComponentGrid';
import {
    CreditCard,
    BuildingBank,
    Repeat,
    ReceiptRefund,
    Receipt,
    ReceiptTax,
    Report,
    CashBanknote,
    Container,
    Coin,
    CalendarEvent,
    Notebook,
    Backpack,
    School,
    Package,
    User,
    ChefHat,
    Map,
    AddressBook,
  
  } from 'tabler-icons-react';

const counselorComponents = [
    { title: 'MyMessages', icon: CalendarEvent, color: 'red' },
    { title: 'MyCalender', icon: Notebook, color: 'orange' },
    { title: 'MyMeetings', icon: Backpack, color: 'yellow' },
    { title: 'MyStudents', icon: School, color: 'green' },
    { title: 'MyNews', icon: Package, color: 'teal' },
    { title: 'MyStyle', icon: User, color: 'blue' },
  ];

const studentComponents = [
    { title: 'MySchedule', icon: CalendarEvent, color: 'red' },
    { title: 'MyNotebook', icon: Notebook, color: 'orange' },
    { title: 'MyBackpack', icon: Backpack, color: 'yellow' },
    { title: 'NextEducation', icon: School, color: 'green' },
    { title: 'MyCredits', icon: Package, color: 'teal' },
    { title: 'MyAdmissions', icon: User, color: 'blue' },
    { title: 'MyCareers', icon: ChefHat, color: 'indigo' },
    { title: 'MyPath', icon: Map, color: 'violet' },
    { title: 'MyCommunity', icon: AddressBook, color: 'pink' },
  ];

function ComponentShowcase() {
    return (
        <div>
         <ComponentGrid
                data={counselorComponents}
                title="MyNext4 X Component Tools"
            />
       
        <ComponentGrid
                data={studentComponents}
                title="MyNext4 U Component Tools"
                />
    </div>
   
    )
}

export default ComponentShowcase;