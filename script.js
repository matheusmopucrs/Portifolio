function atualizarHorarioBrasilia() {
    const agora = new Date();
    const opcoes = {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const horarioBrasilia = new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
    document.querySelector('.navbar__location p').textContent = horarioBrasilia;
  }

  setInterval(atualizarHorarioBrasilia, 1000);
  atualizarHorarioBrasilia();