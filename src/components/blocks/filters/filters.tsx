import React from 'react';
import { useStore } from 'effector-react';
import { $filters, filterProducts, changeFilters, resetProducts } from '../../../model/products';
import { filters } from '../../../data/filters';
import { Title, Range } from '../../ui';
import {
  StyledFilters,
  Wrapper,
  Header,
  Form,
  Fieldset,
  List,
  ListItem,
  Control,
  Label
} from './styles';

const Filters: React.FC = () => {
  const currentFilters = useStore($filters);

  const handleFilterChange = (filterName: string, optionValue: string) => {
    switch (filterName) {
      case 'color':
        return currentFilters.colors.includes(optionValue) ?
          changeFilters({
            ...currentFilters, colors: currentFilters.colors.filter(color => color !== optionValue)
          }) : changeFilters({
            ...currentFilters, colors: [...currentFilters.colors, optionValue]
          })
      case 'bluetooth':
        return changeFilters({
          ...currentFilters, bluetooth: optionValue
        })
    }}

  return (
    <StyledFilters>
      <Wrapper>
        <Header>
          <Title as='h3' size='S'>Фильтр:</Title>
        </Header>
        <Form onSubmit={(evt) => {
          evt.preventDefault();
          resetProducts();
          filterProducts(currentFilters);
        }}>
          {filters.map((filter) => (
            <Fieldset>
              <Title as='legend' size='XS'>{filter.display}</Title>
              {filter.type === 'range' ?
                (<Range
                    name={filter.name}
                    min={0}
                    max={5000}
                    onMinChange={() => {}}
                    onMaxChange={() => {}}
                  />) :
                (<List>
                  {filter.options!.map((option) => (
                    <ListItem key={filter.name + '-' + option.id}>
                      <Control
                        type={filter.type}
                        name={filter.name}
                        value={option.value}
                        checked={filter.name === 'color' ? currentFilters.colors.includes(option.value) :
                          filter.name === 'bluetooth' ? (currentFilters.bluetooth === option.value) : false}
                        onChange={() => handleFilterChange(filter.name, option.value)}
                      />
                      <Label>{option.display}</Label>
                    </ListItem>
                  ))}
                </List>)}
            </Fieldset>))}
          <button type='submit'>Показать</button>
        </Form>
      </Wrapper>
    </StyledFilters>
  )
};

export default Filters;
