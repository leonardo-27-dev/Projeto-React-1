import { React } from 'react';
import { MdCleaningServices } from 'react-icons/md';
import { Container, Selector, Cleaner } from './styles';

const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Python', count: 3, color: '#e74c3c' },
    { name: 'C#', count: 4, color: '#555459' },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase()} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
        <MdCleaningServices size={20}/>
        Limpar
        </Cleaner>
    </Container>
  );
};

export default Filter;

