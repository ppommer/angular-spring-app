package com.example.demo.service;

import com.example.demo.dao.UserDao;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;


@Service
public class WeatherService {

  private final UserDao userDao;

  public WeatherService(
    @Qualifier("fakeDao") UserDao userDao) {
    this.userDao = userDao;
  }

  public String getWeather(UUID id) {
    final String BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Munich,DE&units=metric";
    final String APP_ID = "a0191a5d64339913c4c10d7fea9774ba";

    if (userDao.authenticateUser(id) == 1) {
      RestTemplate restTemplate = new RestTemplate();
      return restTemplate.getForObject(BASE_URL + "&appid=" + APP_ID, String.class);
    }
    return null;
  }

}
