import React, { memo, useState, useEffect } from 'react'
import { useFormikContext } from 'formik';

import Input from 'components/Input'
import Select from 'components/Select'
import ibge from 'commons/resources/api/ibge';

const AddressForm = ({addressData}) => {
  const [ufList, setUfList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const { values, setFieldValue } = useFormikContext();
  
  console.log({addressData});

  useEffect(() => {
    ibge.ufListing()
      .then(({ data }) => setUfList(data.map(({ sigla, nome }) => ({ value: sigla, label: nome }))))
  }, [])

  useEffect(() => {
    if(!values.uf) return
    setFieldValue(values.city, null)
    ibge.cityListing(values.uf)
      .then(({ data }) => setCityList(data.map(({ nome }) => ({ label: nome, value: nome }))))
  }, [values.uf])

  return (
    <>
      <Input
        name="address.cep"
        label="CEP"
        value={addressData?.cep}
      />
      <Select
        name="address.uf"
        label="Estado"
        options={ufList}
        value={addressData?.uf}
      />
      <Select
        name="address.city"
        label="Cidade"
        options={cityList}
        disabled={!cityList.length}
        value={addressData?.city}
      />
      <Input
        name="address.address"
        label="Rua"
        value={addressData?.address}

      />
      <Input
        name="address.number"
        label="Número"
        value={addressData?.number}

      />
      <Input
        name="address.additional"
        label="Complemento"
        value={addressData?.additional}

      />
      <Input
        name="address.reference"
        label="Referência"
        value={addressData?.reference}

      />
      <Input
        name="address.neighborhood"
        label="Bairro"
        value={addressData?.neighborhood}

      />
    </>
  )
}

export default memo(AddressForm);
