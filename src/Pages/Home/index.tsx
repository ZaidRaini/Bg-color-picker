import { SearchIcon } from '@/assets/svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Home() {
  //translation
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(''); // Default language is English

  const texts = {
    title: t('title'),
    searchPlaceholder: t('searchPlaceholder'),
    languageLabel: t('languageLabel'),
    submitButton: t('submitButton'),
    englishOption: t('englishOption'),
    frenchOption: t('frenchOption'),
    spanishOption: t('spanishOption'),
    posts: t('posts'),
  };

  function handleClick(lang: string) {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  }
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Link to="/posts">{texts.posts}</Link>
      <h1>{texts.title}</h1>
      <Input
        icon={<SearchIcon />}
        className="border-none bg-[#24282C] pl-12 text-primary-foreground active:border-none"
        placeholder={texts.searchPlaceholder}
        type="search"
      ></Input>
      <br />
      <label htmlFor="language-select">{texts.languageLabel}</label>
      <select
        id="language-select"
        onChange={e => handleClick(e.target.value)}
        value={selectedLanguage}
      >
        <option value="en">{texts.englishOption}</option>
        <option value="fr">{texts.frenchOption}</option>
        <option value="es">{texts.spanishOption}</option>
      </select>
      <br />
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon">
          <SearchIcon />
        </Button>
        <Button>{texts.submitButton}</Button>
        <Button className="w-1/3">{texts.submitButton}</Button>
      </div>
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon" variant={'outline'}>
          <SearchIcon />
        </Button>
        <Button variant={'outline'}>{texts.submitButton}</Button>
        <Button className="w-1/3" variant={'outline'}>
          {texts.submitButton}
        </Button>
      </div>
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon" variant={'destructive'}>
          <SearchIcon />
        </Button>
        <Button variant={'destructive'}>{texts.submitButton}</Button>
        <Button className="w-1/3" variant={'destructive'}>
          {texts.submitButton}
        </Button>
      </div>
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon" variant={'ghost'}>
          <SearchIcon />
        </Button>
        <Button variant={'ghost'}>{texts.submitButton}</Button>
        <Button className="w-1/3" variant={'ghost'}>
          {texts.submitButton}
        </Button>
      </div>
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon" variant={'secondary'}>
          <SearchIcon />
        </Button>
        <Button variant={'secondary'}>{texts.submitButton}</Button>
        <Button className="w-1/3" variant={'secondary'}>
          {texts.submitButton}
        </Button>
      </div>
      <div className="flex w-full items-center justify-around py-2">
        <Button size="icon" variant={'link'}>
          <SearchIcon />
        </Button>
        <Button variant={'link'}>{texts.submitButton}</Button>
        <Button className="w-1/3" variant={'link'}>
          {texts.submitButton}
        </Button>
      </div>
    </div>
  );
}

export default Home;
