package com.fis.business.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class GenericMapper<T, E> {

    @Autowired
    ModelMapper modelMapper;

    public E convertToEntity (T t, Class<E> targetClass) {
        return modelMapper.map(t, targetClass);
    }

    public T convertToDTO (E e, Class<T> targetClass) {
        return modelMapper.map(e, targetClass);
    }

}
