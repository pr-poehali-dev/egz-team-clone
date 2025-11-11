import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Комплексный маркетинг',
      description: 'Разработаем стратегию продвижения вашего бизнеса с учетом всех каналов коммуникации',
      features: ['Анализ рынка', 'Стратегия продвижения', 'Конкурентный анализ']
    },
    {
      icon: 'Users',
      title: 'Трафик в соцсетях',
      description: 'Привлечем целевую аудиторию через Telegram, Яндекс и ВКонтакте',
      features: ['Telegram-реклама', 'Яндекс.Директ', 'Таргет ВКонтакте']
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Выведем ваш сайт в топ поисковых систем и увеличим органический трафик',
      features: ['Техническая оптимизация', 'Контент-маркетинг', 'Линкбилдинг']
    }
  ];

  const cases = [
    {
      title: 'E-commerce магазин',
      result: '+340% продаж',
      description: 'Увеличили конверсию интернет-магазина за 3 месяца',
      metrics: ['5x ROI', '2.4M охват', '340% продаж']
    },
    {
      title: 'B2B сервис',
      result: '+250 лидов/мес',
      description: 'Построили систему генерации лидов через Telegram',
      metrics: ['250+ лидов', '18% конверсия', '60% стоимость']
    },
    {
      title: 'Локальный бизнес',
      result: 'ТОП-3 в Яндекс',
      description: 'Вывели в топ по 47 ключевым запросам',
      metrics: ['ТОП-3 позиции', '+420% трафик', '89% видимость']
    }
  ];

  const team = [
    { name: 'Александр Иванов', role: 'Руководитель проектов', experience: '8 лет опыта' },
    { name: 'Мария Смирнова', role: 'SEO-специалист', experience: '6 лет опыта' },
    { name: 'Дмитрий Петров', role: 'Таргетолог', experience: '5 лет опыта' },
    { name: 'Елена Кузнецова', role: 'Контент-маркетолог', experience: '7 лет опыта' }
  ];

  const technologies = [
    { name: 'Telegram Ads', category: 'Реклама' },
    { name: 'Яндекс.Директ', category: 'Реклама' },
    { name: 'VK Реклама', category: 'Реклама' },
    { name: 'Google Analytics', category: 'Аналитика' },
    { name: 'Яндекс.Метрика', category: 'Аналитика' },
    { name: 'Ahrefs', category: 'SEO' },
    { name: 'Screaming Frog', category: 'SEO' },
    { name: 'Serpstat', category: 'SEO' }
  ];

  const testimonials = [
    {
      author: 'Игорь Васильев',
      company: 'ООО "ТехноПро"',
      text: 'За 4 месяца работы получили в 3 раза больше заявок. Команда профессионалов, рекомендую!',
      rating: 5
    },
    {
      author: 'Ольга Морозова',
      company: 'Интернет-магазин "Стиль"',
      text: 'Отличные результаты по SEO. Трафик вырос на 280%, продажи увеличились в 2 раза.',
      rating: 5
    },
    {
      author: 'Сергей Николаев',
      company: 'Медицинский центр "Здоровье"',
      text: 'Профессиональный подход к таргетированной рекламе. Стоимость лида снизилась на 45%.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={28} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              MarketPro
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <a href="#technologies" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm">Заказать консультацию</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 fade-in" variant="secondary">
            🚀 Эффективный digital-маркетинг
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
            Увеличим продажи<br />вашего бизнеса в 3 раза
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
            Комплексный маркетинг, таргетированная реклама и SEO-продвижение от экспертов с опытом 8+ лет
          </p>
          <div className="flex gap-4 justify-center fade-in">
            <Button size="lg" className="hover-scale">
              <Icon name="Send" size={18} className="mr-2" />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              <Icon name="FileText" size={18} className="mr-2" />
              Наши кейсы
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="fade-in">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground mt-2">Проектов запущено</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-primary">8 лет</div>
              <div className="text-sm text-muted-foreground mt-2">На рынке</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold text-primary">340%</div>
              <div className="text-sm text-muted-foreground mt-2">Средний рост продаж</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр digital-маркетинга для роста вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="hover-scale overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <Icon name="BarChart3" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{caseItem.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {caseItem.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary">{metric}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты с подтвержденным опытом в маркетинге
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии и инструменты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем только проверенные платформы для достижения результата
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, idx) => (
              <Card key={idx} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Icon name="Cpu" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-base">{tech.name}</CardTitle>
                  <CardDescription className="text-sm">{tech.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover-scale">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">{testimonial.text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">{testimonial.author}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.company}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Начнем работать вместе?</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input
                    placeholder="ivan@example.com или +7 900 123-45-67"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о проекте</label>
                  <Textarea
                    placeholder="Опишите ваши цели и задачи..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full hover-scale">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">Или свяжитесь с нами напрямую:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@marketpro.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                hello@marketpro.ru
              </a>
              <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                +7 900 123-45-67
              </a>
              <a href="https://t.me/marketpro" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
                <span className="text-xl font-bold">MarketPro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Эффективный digital-маркетинг для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Комплексный маркетинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Трафик в соцсетях</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO продвижение</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@marketpro.ru</li>
                <li>+7 900 123-45-67</li>
                <li>Telegram: @marketpro</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 MarketPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
