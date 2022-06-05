import React from 'react';

class ErrorBoundary extends React.Component<{ children?: JSX.Element }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // с помощью этого метода меняем стейт компонента при возникновении ошибки:
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // с помощью этого метода логируем информацию об ошибке:
  componentDidCatch(error: any, info: any) {
    console.log('Возникла ошибка!', error, info);
  }

  render() {
    // eslint-disable-next-line
    if (this.state.hasError) {
      // если возникла ошибка, сообщаем об этом пользователю в специальном компоненте:
      return (
        <section>
          <h1>Что-то пошло не так :(</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // если всё работает штатно, рендерим дочерние компоненты
    // eslint-disable-next-line
    return this.props.children;
  }
}

export default ErrorBoundary;
