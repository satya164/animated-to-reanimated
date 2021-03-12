package com.reactnativeanimatedtoreanimated

import com.facebook.react.bridge.Arguments

import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event;

import com.facebook.react.uimanager.events.RCTEventEmitter

class ValueChangeEvent(viewTag: Int, private val value: Double) : Event<ValueChangeEvent>(viewTag) {
  val EVENT_NAME = "onValueChange"

  override fun dispatch(emitter: RCTEventEmitter) {
    emitter.receiveEvent(viewTag, eventName, serializeEventData())
  }

  override fun getEventName(): String {
    return EVENT_NAME
  }

  private fun serializeEventData(): WritableMap {
    val eventData = Arguments.createMap()
    eventData.putDouble("value", value)
    return eventData
  }
}
