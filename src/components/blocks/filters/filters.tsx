import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $filters, filterProducts, changeFilters } from '../../../model/catalog';
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
  const [minPrice, setMinPrice] = useState(currentFilters.price.min);
  const [maxPrice, setMaxPrice] = useState(currentFilters.price.max);
  const [colors, setColors] = useState(currentFilters.colors);
  const [bluetooth, setBluetooth] = useState(currentFilters.bluetooth);

  return (
    <StyledFilters>
      <Wrapper>
        <Header>
          <Title as='h3' size='S'>Фильтр:</Title>
        </Header>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            changeFilters({
              price: {
                min: minPrice,
                max: maxPrice,
              },
              colors: colors,
              bluetooth: bluetooth,
            });
            changeFilters.watch(filters => {
              console.log(filters);
              filterProducts(filters);
            });
          }}
        >
          {filters.map((filter) => (
            <Fieldset>
              <Title as='legend' size='XS'>{filter.display}</Title>
              {
                filter.type === 'range' ?
                  (<Range
                      name={filter.name}
                      min={minPrice}
                      max={maxPrice}
                      onMinChange={setMinPrice}
                      onMaxChange={setMaxPrice}
                    />) :
                  (<List>
                    {filter.options!.map((option) => (
                      <ListItem key={`${filter.name}-${option.id}`}>
                        <Control
                          type={filter.type}
                          name={filter.name}
                          value={option.value}
                          checked={
                            filter.name === 'color' ? colors.includes(option.value) :
                              filter.name === 'bluetooth' ? bluetooth : false
                          }
                          onChange={(evt) =>
                            filter.name === 'color' ?
                              (colors.includes(option.value) ?
                                setColors(colors.filter(color => color !== option.value)) :
                                setColors([...colors, option.value])) :
                              filter.name === 'bluetooth' ?
                                setBluetooth(!bluetooth) : null
                          }
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
