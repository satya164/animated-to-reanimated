#import <React/RCTViewManager.h>

@interface AnimatedToReanimatedViewManager : UIView

@property (nonatomic) NSNumber* value;
@property (nonatomic, copy) RCTBubblingEventBlock onValueChange;

@end

@implementation AnimatedToReanimatedViewManager

RCT_EXPORT_MODULE(AnimatedToReanimatedView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(onValueChange, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(value, NSNumber)

- (void) setValue:(NSNumber*)value{
  self.value = value;
  self.onValueChange(@{
    @"value": value
  });
}

@end
