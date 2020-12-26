import React, { useState, useCallback } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import logoImg from '../../assets/logo_inverted.png';
import amora from '../../assets/amora.jpg';
import rex from '../../assets/rex.jpg';
import bidu from '../../assets/bidu.jpg';
import toby from '../../assets/toby.jpg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();
  console.log(user);
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt={user.name} />
          <Profile>
            <img
              src="https://i.pinimg.com/736x/3b/74/bc/3b74bca401101300aba962b2d867a209.jpg"
              alt="logo"
            />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name} | PetShop - Águia Azul</strong>
            </div>
          </Profile>
          <button onClick={signOut} type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 17</span>
            <span>Quinta-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src={amora} alt="amora" />
              <strong>Amora</strong>
              <span>
                <p>Banho e Tosa</p>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img src={rex} alt="rex" />

                <strong>Rex</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>
              <div>
                <img src={toby} alt="toby" />
                <strong>Toby</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                15:30
              </span>
              <div>
                <img src={bidu} alt="logo" />
                <strong>Bidu</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            selectedDays={selectedDate}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            onDayClick={handleDateChange}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
