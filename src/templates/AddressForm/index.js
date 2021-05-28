import React, { memo, useState, useEffect } from 'react'
import { useFormikContext } from 'formik';

import Input from 'components/Input'
import Select from 'components/Select'
import ibge from 'commons/resources/api/ibge';

const AddressForm = () => {
  const [ufList, setUfList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const { values, setFieldValue } = useFormikContext();
  
  useEffect(() => {
    ibge.ufListing()
      .then(({ data }) => setUfList(data.map(({ sigla, nome }) => ({ value: sigla, label: nome }))))
  }, [])

  useEffect(() => {
    if(!values.address?.uf) return
    setFieldValue(values.city, null)
    ibge.cityListing(values.address?.uf)
      .then(({ data }) => setCityList(data.map(({ nome }) => ({ label: nome, value: nome }))))
  }, [values.address?.uf])

  return (
    <>
      <Input
        name="address.cep"
        label="CEP"
      />
      <Select
        name="address.uf"
        label="Estado"
        options={ufList}
      />
      <Select
        name="address.city"
        label="Cidade"
        options={cityList}
        disabled={!cityList.length}
      />
      <Input
        name="address.address"
        label="Rua"
      />
      <Input
        name="address.number"
        label="Número"
      />
      <Input
        name="address.additional"
        label="Complemento"
      />
      <Input
        name="address.reference"
        label="Referência"
      />
      <Input
        name="address.neighborhood"
        label="Bairro"
      />
    </>
  )
}

export default memo(AddressForm);
