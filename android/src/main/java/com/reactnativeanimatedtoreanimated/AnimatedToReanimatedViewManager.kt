package com.reactnativeanimatedtoreanimated

import android.view.View
import com.facebook.react.bridge.ReactContext
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.UIManagerModule
import com.facebook.react.uimanager.annotations.ReactProp

class AnimatedToReanimatedViewManager : SimpleViewManager<View>() {
  override fun getName() = "AnimatedToReanimatedView"

  override fun createViewInstance(reactContext: ThemedReactContext): View {
    return View(reactContext)
  }

  override fun getExportedCustomDirectEventTypeConstants(): MutableMap<String, Any> {
    return MapBuilder.of(
        "onValueChange",
        MapBuilder.of(
          "registrationName","onValueChange"))
  }


  @ReactProp(name = "value")
  fun setValue(view: View, value: Double) {
    val reactContext = view.context as ReactContext;
    val dispatcher = reactContext.getNativeModule(UIManagerModule::class.java).eventDispatcher

    dispatcher.dispatchEvent(ValueChangeEvent(view.id, value))
  }
}
