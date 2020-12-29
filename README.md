# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário
disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um
prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h as 18 (Primeiro as 8h, último as 17h);
- O usuário nao pode agendar em um horário já ocupado;
- O usuário nao pode agendar em um horário que já passou;
- O usuário nao pode agendar serviços consigo mesmo;
