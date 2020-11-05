package com.example.demo.api;

import com.example.demo.service.WeatherService;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;


@RequestMapping("api/weather")
@RestController
public class WeatherController {

  private final WeatherService weatherService;

  public WeatherController(WeatherService weatherService) {
    this.weatherService = weatherService;
  }

  @CrossOrigin
  @GetMapping
  public String getWeather(@RequestHeader("authorization") String bearer) {
    UUID id = UUID.fromString(bearer.split("\\s+")[1]);
    return weatherService.getWeather(id);
  }

}
